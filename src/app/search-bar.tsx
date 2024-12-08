import React from 'react';

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
}

export default function SearchBar({
    searchTerm,
    onSearchChange,
}: SearchBarProps) {
    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="ابحث عن اسم"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full px-4 py-2 border dark:bg-black rounded-md focus:outline-none focus:ring-2"
            />
        </div>
    );
}
