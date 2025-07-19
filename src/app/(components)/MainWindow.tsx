import { ReactNode } from "react";

export default function MainWindow({ children }: { children: ReactNode }) {
    return (
        <div className="bg-neutral-900 max-w-5xl w-full p-5 border border-neutral-700/50 shadow-xl shadow-neutral-800/50 rounded-lg text-orange-50">
            {children}
        </div>
    );
}
