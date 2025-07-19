import { ReactNode } from "react";

export default function PageWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 min-h-screen flex flex-col justify-start items-center p-5 space-y-10">
            {children}
        </div>
    );
}
