import React, { Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ReactPlayer from "react-player";
import Link from "next/link";
import { Mixpanel } from "./common/mixpanel";

interface VideoModalProps {
  open: boolean;
  url: string;
  onHandleClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({
  open,
  url,
  onHandleClose,
}) => {
  const triggerClose = () => {
    onHandleClose();
  };

  useEffect(() => {
    if (open) {
      Mixpanel.track("Watch Demo Video");
    }
  }, [open]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={triggerClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-55 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all w-full max-w-sm sm:my-8 sm:max-w-4xl sm:w-full sm:p-6">
                <div className="overflow-hidden bg-gray-800 rounded-lg shadow-md">
                  <div className="player-wrapper rounded-md">
                    <ReactPlayer
                      url={url}
                      className="react-player"
                      width="100%"
                      height="100%"
                      playing={true}
                      controls={true}
                    />
                  </div>
                </div>
                <div className="mt-4 bg-gray-800 w-full">
                  {" "}
                  <Link
                    className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group"
                    href="https://app.unstoppablesunday.com/users/sign_up"
                  >
                    Start Free Trial{" "}
                    <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default VideoModal;
