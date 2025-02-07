interface HighlightedTableProps {
    showHeader: boolean;
    header: string[];
    data: (string | number)[][];
    highlightStart: number[];
    highlightEnd: number[];
}

export const HighlightedTable: React.FC<HighlightedTableProps> = ({
    showHeader,
    header,
    data,
    highlightStart,
    highlightEnd,
}: HighlightedTableProps) => {
    const shouldBeHighlighted = (
        rowIndex: number,
        columnIndex: number
    ): boolean => {
        return (
            rowIndex >= highlightStart[0] &&
            rowIndex <= highlightEnd[0] &&
            columnIndex >= highlightStart[1] &&
            columnIndex <= highlightEnd[1]
        );
    };
    return (
        <>
            <table className="border border-solid border-black p-2 border-collapse">
                {showHeader && (
                    <thead>
                        <tr className="border border-solid border-black p-1">
                            {header.map((header) => (
                                <td className="border border-solid border-black p-1">
                                    {header}
                                </td>
                            ))}
                        </tr>
                    </thead>
                )}
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr>
                            {row.map((value, columnIndex) => (
                                <td
                                    className={`${
                                        shouldBeHighlighted(
                                            rowIndex,
                                            columnIndex
                                        )
                                            ? "bg-blue-100"
                                            : ""
                                    } border border-solid border-black p-1`}
                                >
                                    {value}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
