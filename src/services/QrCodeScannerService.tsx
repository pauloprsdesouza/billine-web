import React, { useRef, useEffect } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

interface QRScannerProps {
    setDecodedText: React.Dispatch<React.SetStateAction<string>>;
}

const QRScannerService: React.FC<QRScannerProps> = ({ setDecodedText }) => {
    const scannerRef = useRef<HTMLDivElement | null>(null);
    const qrCodeInstance = useRef<Html5Qrcode | null>(null);

    useEffect(() => {
        if (!scannerRef.current) return;

        if (!qrCodeInstance.current) {
            qrCodeInstance.current = new Html5Qrcode(scannerRef.current.id, false);


            const config = { fps: 10, qrbox: { width: 250, height: 250 } };

            qrCodeInstance.current.start(
                { facingMode: "environment" },
                config,
                (decodedText: string) => {
                    setDecodedText(decodedText);
                    qrCodeInstance.current?.stop();
                },
                undefined
            );
        }

    }, [setDecodedText]);

    return <div id="qrcode-scan" ref={scannerRef} style={{ width: '600px' }}></div>;
};

export default QRScannerService;
