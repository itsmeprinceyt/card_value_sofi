export default function Loader() {
    return (
        <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 fixed inset-0 min-h-screen flex items-center justify-center text-white select-none">
            <div className="flex items-center gap-3 mb-4">
                <svg
                    className="animate-spin h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-10"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <path
                        className="opacity-100"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                    />
                </svg>

                <h1 className="text-xl font-bold tracking-widest animate-pulse">
                    LOADING
                </h1>
            </div>
        </div>
    );
}

{/*
    <div className="fixed inset-0 bg-gradient-tob from-neutral-900 to-neutral-950 flex flex-col items-center justify-center text-center p-4 text-white select-none">
            <div className="flex items-center gap-3 mb-4">
                <svg
                    className="animate-spin h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-10"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <path
                        className="opacity-100"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                    />
                </svg>

                <h1 className="text-xl font-bold tracking-widest animate-pulse">
                    LOADING
                </h1>
            </div>
        </div>
         */}