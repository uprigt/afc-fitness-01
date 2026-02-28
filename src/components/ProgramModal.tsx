import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar, CheckCircle2 } from 'lucide-react';
import type { Program } from '@/sections/Programs';

interface ProgramModalProps {
    isOpen: boolean;
    onClose: () => void;
    program: Program | null;
}

export default function ProgramModal({
    isOpen,
    onClose,
    program,
}: ProgramModalProps) {
    if (!program) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl p-0 bg-dark border-white/[0.06] overflow-hidden text-white sm:rounded-2xl">
                <DialogHeader className="sr-only">
                    <DialogTitle>{program.title}</DialogTitle>
                    <DialogDescription>Details about {program.title}</DialogDescription>
                </DialogHeader>
                {/* Header Image Area */}
                <div className="relative h-48 sm:h-64 md:h-72 w-full">
                    <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-red-accent rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                                <program.icon className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tight">
                                    {program.title}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scrollable Content Body */}
                <div className="max-h-[60vh] overflow-y-auto px-6 py-8 sm:px-8 custom-scrollbar">
                    <div className="space-y-8">
                        {/* Description Section */}
                        <div>
                            <h3 className="text-xl font-heading font-bold text-white mb-3">About This Program</h3>
                            <p className="text-gray-300 leading-relaxed">
                                {program.longDescription || program.description}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Benefits Section */}
                            <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
                                <h3 className="text-lg font-heading font-bold text-white mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-red-accent" />
                                    Key Benefits
                                </h3>
                                <ul className="space-y-3">
                                    {(program.benefits || program.features).map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-accent mt-2 shrink-0" />
                                            <span className="text-sm text-gray-300">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Schedule Section */}
                            <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
                                <h3 className="text-lg font-heading font-bold text-white mb-4 flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-red-accent" />
                                    Available Schedule
                                </h3>
                                <div className="space-y-3">
                                    {program.schedule?.map((session, i) => (
                                        <div key={i} className="flex justify-between items-center border-b border-white/[0.05] pb-2 last:border-0 last:pb-0">
                                            <span className="text-sm font-medium text-white">{session.days}</span>
                                            <span className="text-sm text-gray-400">{session.time}</span>
                                        </div>
                                    )) || (
                                            <p className="text-sm text-gray-400">Schedule information not available. Contact us for details.</p>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer actions */}
                <div className="p-6 border-t border-white/[0.06] bg-dark/50 backdrop-blur-md flex justify-end gap-4">
                    <Button variant="ghost" onClick={onClose} className="hover:bg-white/5 text-gray-400 hover:text-white">
                        Close
                    </Button>
                    <Button
                        onClick={() => {
                            onClose();
                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-red-accent hover:bg-red-accent/90 text-white"
                    >
                        Book Trial Class
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
