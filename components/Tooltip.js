import React, { useState, useEffect } from 'react';
import { usePopper } from 'react-popper';
import { useTour } from '../contexts/TourProvider';

export const useTooltip = () => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  return {
    referenceElement,
    setReferenceElement,
    popperElement,
    setPopperElement,
  };
};

// look into forward ref

const Tooltip = ({
  referenceElement,
  popperElement,
  setPopperElement,
  index,
  title,
}) => {
  const {
    register,
    deregister,
    count,
    activeIndex,
    close,
    next,
    prev,
  } = useTour();

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'left-start',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 4],
        },
      },
    ],
  });
  const show = activeIndex === index;
  const lastItem = index === count;
  const firstItem = index === 1;

  useEffect(() => {
    register();

    return () => {
      deregister();
    };
  }, []);

  return (
    <>
      {show && (
        <div
          className="flex bg-white shadow-lg rounded-lg max-w-md md:max-w-2xl"
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <div className="flex items-start px-4 py-6">
            <img
              className="w-12 h-12 rounded-full object-cover mr-4 shadow"
              src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />
            <div className="">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 -mt-1">
                  {title}
                </h2>
                <small className="text-sm text-gray-700">
                  {index}/{count}
                </small>
              </div>

              <p className="mt-3 text-gray-700 text-sm">
                Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor
                sit amet!
              </p>

              <ul className="flex mt-4 justify-end">
                <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-500 rounded-lg">
                  <a
                    className="flex items-center font-bold"
                    href="#"
                    onClick={firstItem ? () => {} : prev}
                  >
                    <span className="mx-1">previous</span>
                  </a>
                </li>
                <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
                  <a
                    className="flex items-center font-bold"
                    href="#"
                    onClick={lastItem ? close : next}
                  >
                    <span className="mx-1">{lastItem ? 'close' : 'next'}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tooltip;
