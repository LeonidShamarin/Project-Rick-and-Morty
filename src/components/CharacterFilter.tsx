import React, { ChangeEvent } from "react";

interface CharacterFilterProps {
  searchQuery: string;
  statusFilter: string;
  genderFilter: string;
  onSearch: (query: string) => void;
  onStatusFilter: (status: string) => void;
  onGenderFilter: (gender: string) => void;
}

const CharacterFilter: React.FC<CharacterFilterProps> = ({
  searchQuery,
  statusFilter,
  genderFilter,
  onSearch,
  onStatusFilter,
  onGenderFilter,
}) => {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onStatusFilter(e.target.value);
  };

  const handleGenderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onGenderFilter(e.target.value);
  };

  return (
    <div className="mb-4 p-10">
      <div className="mb-2">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          className="border border-gray-300 rounded-md px-3 py-2 w-96"
          onChange={handleSearchChange}
        />
      </div>
      <div className="flex space-x-4">
        <div>
          <label
            htmlFor="status-filter"
            className="block text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <select
            id="status-filter"
            value={statusFilter}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            onChange={handleStatusChange}
          >
            <option value="">All</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="gender-filter"
            className="block text-sm font-medium text-gray-700"
          >
            Gender
          </label>
          <select
            id="gender-filter"
            value={genderFilter}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            onChange={handleGenderChange}
          >
            <option value="">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CharacterFilter;
