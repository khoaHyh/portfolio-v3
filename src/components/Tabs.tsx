import { ReactNode, useState } from "react";

export type TabContent = { [label: string]: ReactNode };

interface TabsProps {
  tabs: TabContent;
}

export default function Tabs({ tabs }: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);

  return (
    <>
      <div className="mb-4 ">
        <ul
          className="flex flex-wrap -mb-px text-sm text-secondary font-medium text-center"
          id="default-styled-tab"
          role="tablist"
        >
          {Object.keys(tabs).map((label) => (
            <li key={label} className="me-2" role="presentation">
              <button
                className={`inline-block p-4 rounded-t-lg border-b-2 ${
                  activeTab === label
                    ? "border-primaryText text-pinkSoft font-bold"
                    : "border-secondaryAlt"
                } hover:border-primaryText hover:text-pinkSoft focus:border-primaryText transition-colors duration-150`}
                id={`${label}-styled-tab`}
                data-tabs-target={`#styled-${label}`}
                type="button"
                role="tab"
                aria-controls={label}
                aria-selected="false"
                onClick={() => setActiveTab(label)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div id="tab-content" className="mt-4 text-bodyLightSlateGray">
        {activeTab != null && tabs[activeTab]}
      </div>
    </>
  );
}
