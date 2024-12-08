'use client';

import React, { useState, useMemo } from 'react';
import SearchBar from './search-bar';

interface NameListProps {
    names: string[];
}

export default function NameList({ names }: NameListProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredNames = useMemo(() => {
        return names.filter((name) =>
            name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [names, searchTerm]);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">قائمة الاسماء</h2>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            {filteredNames.length > 0 ? (
                <ul className="list-disc list-inside space-y-2">
                    {filteredNames.map((name, index) => (
                        <li key={index} className="text-lg">
                            {index + 1}. {name}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="italic">لم يتم العثور على اسماء</p>
            )}
        </div>
    );
}
