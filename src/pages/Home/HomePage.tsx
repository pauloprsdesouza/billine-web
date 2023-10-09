import React, { useEffect, useState } from "react";
import QRCodeScannerService from "../../services/QrCodeScannerService";
import OrderService from "../../services/OrderService";
import { AxiosError, AxiosResponse } from "axios";
import { Html5QrcodeResult } from "html5-qrcode";

const HomePage: React.FC = () => {
    const [isScanning, setIsScanning] = useState(false);
    const [decodedText, setDecodedText] = useState<string>("");

    useEffect(() => {
        if (decodedText) {
            var qrCodeId = getPParameterFromURL(decodedText);
            if (!qrCodeId) return;

            OrderService.create({ qrCodeId: qrCodeId })
                .then((respone: AxiosResponse) => {
                    setIsScanning(false);
                    window.location.href = "orders"
                }).catch((error: AxiosError) => {

                });
        }
    }, [decodedText])

    const getPParameterFromURL = (url: string): string | null => {
        const params = new URLSearchParams(new URL(url).search);
        return params.get('p');
    }

    return (
        <div>
            {isScanning ?
                <QRCodeScannerService setDecodedText={setDecodedText} />
                :
                <button className='btn btn-primary' type="button" onClick={() => setIsScanning(true)}><i className="fa-solid fa-qrcode"></i> Escanear QR Code</button>
            }
        </div>
    );
}

export default HomePage;