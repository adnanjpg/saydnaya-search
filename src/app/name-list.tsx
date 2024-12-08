'use client';

import React, { useState, useMemo } from 'react';
import SearchBar from './search-bar';

interface NameListProps {
    names: string[];
}

export default function NameList({ names }: NameListProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredNames = useMemo(() => {
        // Use a Set to filter out duplicates
        const uniqueNames = Array.from(new Set(names.map(name => name.trim())));
        const normalizedSearchTerm = searchTerm.replace(/\s+/g, '').toLowerCase();
        return uniqueNames.filter((name) =>
            name.replace(/\s+/g, '').toLowerCase().includes(normalizedSearchTerm)
        );
    }, [names, searchTerm]);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-1">احرار صيدنايا</h2>
            <p className="mb-4">الرجاء ادخال الاسم او الكنية</p>
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