import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../../ui/hover-card';
import { Button } from '../../ui/button';
import { Download, QrCode, Smartphone } from 'lucide-react';

const AppDownloadPopup = () => {
    return (
         <HoverCard openDelay={0} closeDelay={100}>
            <HoverCardTrigger asChild>
              <Button variant="ghost" size="sm" className="h-10 w-10 rounded-full text-white hover:bg-transparent hover:text-gray-100">
                
                <Smartphone className="h-4 w-4"/>
                App
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 p-0 bg-gray-800 border-gray-700" align="end" sideOffset={8}>
              <div className="p-6 space-y-4">
                {/* Header Text */}
                <div className="text-center">
                  <h3 className="text-white font-medium text-sm">Scan QR code to</h3>
                  <h3 className="text-white font-medium text-sm">download ReelShort App</h3>
                </div>

                {/* QR Code and Download Info */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex items-center space-x-1 text-gray-300">
                      <Smartphone className="h-4 w-4" /> 
                      <Smartphone className="h-4 w-4" />
                    </div>
                    <p className="text-gray-300 text-xs text-center">Download on iOS or Android</p>
                  </div>

                  {/* QR Code */}
                  <div className="bg-white p-2 rounded">
                    <div className="w-16 h-16  flex items-center justify-center">
                      <QrCode className="w-20 h-20 text-gray-400"/>
                    </div>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
    );
};

export default AppDownloadPopup;