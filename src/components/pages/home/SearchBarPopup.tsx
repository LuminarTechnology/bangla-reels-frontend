import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import { Button } from '../../ui/button';
import { Flame, Search } from 'lucide-react';
import { Input } from '../../ui/input';

const hotMovies = [
                      "True Heiress vs. Fake Queen Bee",
                      "Queen Mom Rules",
                      "The Lost Quarterback Returns",
                      "Secret Surrogate to the Mafia King",
                      "Ex-Convict Nanny and Billionaire Single Dad",
                    ]
const SearchBarPopup = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:bg-transparent hover:text-white">
                <Search className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-96  border-none bg-[#0F0828] shadow-lg shadow-black p-0 before:absolute before:-top-2 before:right-1 before:h-0 before:w-0 before:-translate-x-1/2 before:border-r-8 before:border-b-8 before:border-l-8 before:border-r-transparent before:border-b-[#16151A] before:border-l-transparent before:content-['']" align="end" sideOffset={8}>
              <div className="p-4 space-y-4">
                {/* Search Input */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search anything you like"
                    className="pl-10 bg-[#16151A] border-gray-600 text-white placeholder:text-gray-400 focus:border-gray-500"
                  />
                </div>

                {/* Hot Movie Section */}
                <div className="space-y-3">
                  <h3 className="text-white font-semibold text-lg">Hot Movie</h3>
                  <div className="space-y-2">
                    {hotMovies.map((movie, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-white hover:bg-gray-700 p-2 rounded cursor-pointer"
                      >
                        <Flame className="h-4 w-4 text-orange-500 flex-shrink-0" />
                        <span className="text-sm">{movie}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* People are searching Section */}
                <div className="space-y-3">
                  <h3 className="text-white font-semibold text-lg">People are searching</h3>
                  <div className="flex space-x-4">
                    <span className="text-white text-sm hover:text-gray-300 cursor-pointer">Hidden Identity</span>
                    <span className="text-white text-sm hover:text-gray-300 cursor-pointer">Strong Heroine</span>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
    );
};

export default SearchBarPopup;