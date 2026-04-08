import Modal from '@/superadmin/components/Modal';
import Eye from '@shared/images/icons/eyeIcon.svg?react';
import Meta from '@shared/images/icons/meta.svg?react';
import patternBg from '@shared/images/icons/patternBg.svg';
import { useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE';
type LogStatus = '201 Created' | '401 Unauth' | '500 Error';

interface LogItem {
    id: number;
    time: string;
    date: string;
    method: HttpMethod;
    endpoint: string;
    client: string;
    status: LogStatus;
    latency: string;
}

interface LogDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    log: LogItem | null;
}

const methodStyle = (m: HttpMethod) => {
    if (m === 'POST')
        return 'bg-[#EFF8FF] text-[#175CD3] border border-[#B2DDFF]';
    if (m === 'GET') return 'bg-gray-100 text-gray-600 border border-gray-200';
    if (m === 'PUT')
        return 'bg-yellow-50 text-yellow-700 border border-yellow-200';
    return 'bg-red-50 text-red-600 border border-red-200';
};

const statusStyle = (s: LogStatus) => {
    if (s === '201 Created')
        return 'bg-green-50 text-green-700 border border-green-200';
    if (s === '401 Unauth')
        return 'bg-orange-50 text-orange-600 border border-orange-200';
    return 'bg-red-50 text-red-600 border border-red-200';
};

const statusDot = (s: LogStatus) => {
    if (s === '201 Created') return 'bg-green-500';
    if (s === '401 Unauth') return 'bg-orange-400';
    return 'bg-red-500';
};

const REQUEST_JSON = `{
  "order_id": "ORD-2025-8821",
  "customer": {
    "id": "cus_9921",
    "email": "alice@example.com"
  },
  "items": [
    { "sku": "BURGER-01", "qty": 2 }
  ]
}`;

const RESPONSE_JSON = `{
  "success": true,
  "data": {
    "id": "ord_89234-talabat-v2",
    "status": "queued",
    "created_at": "2025-09-03T14:30:05Z",
    "link": "https://api.ordenarie.com/v1/orders/ord_89234"
  },
  "meta": {
    "trace_id": "tr_773821"
  }
}`;

const CodeBlock = ({ code }: { code: string }) => (
    <div className="rounded-xl bg-[#1e3240] px-6 py-5">
        <pre className="overflow-x-auto font-mono text-sm leading-relaxed whitespace-pre text-[#c8dce8]">
            {code}
        </pre>
    </div>
);

export default function LogDetailModal({
    isOpen,
    onClose,
    log,
}: LogDetailModalProps) {
    const [activeTab, setActiveTab] = useState<'request' | 'response'>(
        'request',
    );
    const [copied, setCopied] = useState(false);

    if (!log) return null;

    const requestId = `req_89234-${log.client.toLowerCase().replace(/\s/g, '_')}-v2`;

    const handleCopy = () => {
        const json = activeTab === 'request' ? REQUEST_JSON : RESPONSE_JSON;
        navigator.clipboard.writeText(json).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                <div className="mb-5">
                    {/* <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                        </svg>
                    </div>
                    <h2 className="mb-1.5 text-base font-semibold text-gray-900">
                        Request Details
                    </h2> */}
                    <div className="mb-5">
                        <div className="relative mb-6 flex items-start gap-4">
                            <div className="pointer-events-none absolute inset-0 top-22 left-[-20px] flex items-center">
                                <img
                                    src={patternBg}
                                    alt=""
                                    className="max-w-none"
                                    style={{
                                        transform: 'scale(1.1)',
                                        opacity: 0.7,
                                    }}
                                />
                            </div>
                            <div>
                                <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                                    <Eye className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3 text-iconColor shadow-sm" />
                                </div>
                            </div>
                        </div>
                        <h2 className="text-base font-semibold text-gray-900">
                            Request Details
                        </h2>
                    </div>
                    {/* ID + Method + Status row */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">
                            ID: {requestId}
                        </span>
                        <span
                            className={`rounded px-2 py-0.5 text-xs font-semibold ${methodStyle(log.method)}`}
                        >
                            {log.method}
                        </span>
                        <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyle(log.status)}`}
                        >
                            <span
                                className={`h-1.5 w-1.5 rounded-full ${statusDot(log.status)}`}
                            />
                            {log.status}
                        </span>
                    </div>
                </div>

                <div className="rounded rounded-xl border border-borderColor p-6">
                    <div className="mb-5 flex items-center gap-6 border-b border-gray-200">
                        {(['request', 'response'] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`cursor-pointer pb-3 text-sm font-medium capitalize transition-colors ${
                                    activeTab === tab
                                        ? 'border-b-2 border-[#84cc16] text-[#84cc16]'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <div className="rounded-xl bg-gray-50 p-5">
                            <div className="mb-4 flex items-center gap-2">
                                {/* cpu/circuit icon */}
                                {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 3H7a2 2 0 00-2 2v2M9 3h6M9 3v2m6-2h2a2 2 0 012 2v2m0 0V7m0 0h-2M3 9v6m0 0v2a2 2 0 002 2h2m-4-4h2m14-8v6m0 0v2a2 2 0 01-2 2h-2m4-4h-2M9 21h6m-6 0v-2m6 2v-2m-6 0H7a2 2 0 01-2-2v-2m14 4h-2a2 2 0 01-2-2v-2"
                                />
                            </svg> */}
                                <Meta className="h-5 w-5" />
                                <span className="text-lg font-semibold text-gray-900">
                                    Metadata
                                </span>
                            </div>

                            {activeTab === 'request' ? (
                                <div className="space-y-4 pl-6">
                                    <div>
                                        <p className="text-xs text-gray-400">
                                            Timestamp
                                        </p>
                                        <p className="mt-0.5 font-semibold text-gray-900">
                                            {log.date} • {log.time}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">
                                            Client
                                        </p>
                                        <p className="mt-0.5 font-semibold text-gray-900">
                                            {log.client} (Logistics_Connect_01)
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">
                                            Endpoint
                                        </p>
                                        <p className="mt-0.5 font-semibold text-gray-900">
                                            https://api.ordenarie.com
                                            {log.endpoint}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">
                                            User Agent
                                        </p>
                                        <p className="mt-0.5 font-semibold text-gray-900">
                                            {log.client}-Connector/v2.1
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4 pl-6">
                                    <div>
                                        <p className="text-xs text-gray-400">
                                            Timestamp
                                        </p>
                                        <p className="mt-0.5 font-semibold text-gray-900">
                                            {log.date} • {log.time}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">
                                            Client
                                        </p>
                                        <p className="mt-0.5 font-semibold text-gray-900">
                                            {log.client} (Logistics_Connect_01)
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">
                                            Endpoint
                                        </p>
                                        <p className="mt-0.5 font-semibold text-gray-900">
                                            https://api.ordenarie.com
                                            {log.endpoint}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">
                                            Server / Duration
                                        </p>
                                        <p className="mt-0.5 font-semibold text-gray-900">
                                            nginx/1.18.0 ({log.latency})
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <CodeBlock
                            code={
                                activeTab === 'request'
                                    ? REQUEST_JSON
                                    : RESPONSE_JSON
                            }
                        />
                    </div>
                </div>
            </div>

            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <IconButton className="w-full" onClick={onClose}>
                    Close
                </IconButton>
                <Button className="w-full" onClick={handleCopy}>
                    {copied ? 'Copied!' : 'Copy JSON'}
                </Button>
            </div>
        </Modal>
    );
}
