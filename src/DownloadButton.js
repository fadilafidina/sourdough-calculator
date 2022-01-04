import React from 'react';

export const DownloadButton = (props) => {
    const {
        dataToDownload
    } = props;

    const handleDownload = (e) => {
        e.preventDefault();

        const processedData = dataToDownload.map(d => ({
            ingredient: d.label,
            percentage: d.ratio * 100,
            amount: d.amount
        }));

        const csvFile = convertToCsv(processedData);
        const fileName = `Sourdough ratios - ${new Date()}.csv`;

        const blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
        if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, fileName);
        } else {
            const link = document.createElement('a');
            if (link.download !== undefined) { // feature detection
                // Browsers that support HTML5 download attribute
                const url = URL.createObjectURL(blob);
                link.setAttribute('href', url);
                link.setAttribute('download', fileName);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }

    const convertToCsv = (items) => {
        const replacer = (_, value) => value === null ? '' : value
        const headers = Object.keys(items[0]);
        const csv = [
            headers.join(','),
            ...items.map(item => headers.map(fieldName => JSON.stringify(item[fieldName], replacer)).join(','))
        ].join('\n');
        console.log(csv);
        return csv;
    }

    return (
        <div>
            <button onClick={(e) => handleDownload(e)}>
                Download csv
            </button>
        </div>
    )
}