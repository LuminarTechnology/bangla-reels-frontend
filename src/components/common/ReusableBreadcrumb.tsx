import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../ui/breadcrumb";

interface BreadcrumbItemType {
  label: string;
  href?: string;
}

interface ReusableBreadcrumbProps {
  items: BreadcrumbItemType[];
}

const ReusableBreadcrumb: React.FC<ReusableBreadcrumbProps> = ({ items }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <BreadcrumbItem>
              {item.href ? (
                <BreadcrumbLink
                  className="text-sm font-medium text-white/70 hover:text-red-700"
                  href={item.href}
                >
                  {item.label}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className="font-medium text-white hover:text-red-600">
                  {item.label}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {idx < items.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default ReusableBreadcrumb;