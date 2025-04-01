import { useTabContext } from '@/context/TabsContext';
import { Check, ExclamationMark, X } from '@phosphor-icons/react';
import React from 'react';

type VerificationStatus = 'verified' | 'on hold' | 'rejected' | undefined;

interface TimelineItem {
  stage: string;
  timestamp: string;
  status?: VerificationStatus;
}

interface VerificationTimelineProps {
  timelineData?: TimelineItem[];
}

const VerificationTimeline: React.FC<VerificationTimelineProps> = ({
  timelineData = [
    { stage: 'Received a dataset', timestamp: '7d ago' },
    { stage: 'Started verification process', timestamp: '7d ago' },
    { stage: 'Proccessing', timestamp: '6d ago' },
    { stage: 'Verifying data source', timestamp: '3d ago' },
    { stage: 'Verified', timestamp: '1d ago', status: 'verified' },
    // { stage: 'On Hold', timestamp: '1d ago', status: 'on hold' },
    // { stage: 'Pending', timestamp: '1d ago', status: 'rejected' },
  ],
}) => {
  const { activeTab } = useTabContext();
  const getStatusIcon = (status: VerificationStatus) => {
    switch (status) {
      case 'verified':
        return (
          <div className="size-6 bg-blue-500 rounded-full flex items-center justify-center">
            <Check className="w-3 h-3 text-white" weight="bold" size={32} />
          </div>
        );
      case 'on hold':
        return (
          <div className="size-6 bg-oOrange-500 rounded-full flex items-center justify-center">
            <ExclamationMark weight="bold" size={20} />
          </div>
        );
      case 'rejected':
        return (
          <div className="size-6 bg-red-500 rounded-full flex items-center justify-center">
            <X weight="bold" size={18} />
          </div>
        );
      default:
        return (
          <div className="size-6 border-2 border-gray-300 bg-gray-400 rounded-full"></div>
        );
    }
  };

  if (activeTab !== 'history') {
    return null;
  }

  const someMessage =
    'Threshold message from chain: Awaiting further validation.';

  const messageFromChain = `{
    "memo": "sws:87b285fa0f93a4b2247e6ee7d0344bfac8137a0410215bce8db3a3ad4d60acb1",
    "rewards": [
      "T-7318a-dcoyd-2025-03-27"
    ]
  }
  `;

  return (
    <div className="relative space-y-4">
      {timelineData.map((item, index) => (
        <div key={index} className="flex items-start gap-4 justify-center">
          <div className="flex flex-col items-center">
            {getStatusIcon(item.status)}
            {index < timelineData.length - 1 && (
              <div className="w-0.5 h-12 bg-gray-200 mt-1"></div>
            )}
          </div>

          <div className="flex-1">
            <div className="flex justify-between">
              <p className="text-md">{item.stage}</p>
              <p className="text-xs text-gray-400">{item.timestamp}</p>
            </div>

            {(item.status === 'on hold' || item.status === 'rejected') && (
              <div className="mt-2 p-3 bg-gray-100 rounded-lg">
                {item.status === 'on hold' ? (
                  <p className="text-sm text-gray-700">{someMessage}</p>
                ) : (
                  <pre className="text-sm text-gray-700">
                    {messageFromChain}
                  </pre>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerificationTimeline;
