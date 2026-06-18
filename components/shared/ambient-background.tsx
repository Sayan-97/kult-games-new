export default function AmbientBackground() {
    return (
        <div className="fixed inset-0 -z-30 overflow-hidden pointer-events-none">
            <div className="ambient-orb-1 absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-900/10 blur-[120px] rounded-full" />
            <div className="ambient-orb-2 absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-900/10 blur-[150px] rounded-full" />
            <div className="ambient-orb-3 absolute top-[30%] left-[20%] w-[30%] h-[30%] bg-fuchsia-900/5 blur-[100px] rounded-full" />
        </div>
    );
}
