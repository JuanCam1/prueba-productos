import { useEffect, type ReactNode, type FC } from "react";
import { CircleX } from "lucide-react";
import { cn } from "@/libs/cn";

interface ModalProps {
	hasCloseBtn?: boolean;
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	titulo?: string;
	mostrarHeader?: boolean;
	mostrarOverlay?: boolean;
	posicionModal?: "center" | "start";
	padding?: string;
	heighModal?: string;
	widthModal?: string;
}

const Modal: FC<ModalProps> = ({
	hasCloseBtn = true,
	isOpen,
	onClose,
	children,
	titulo = "Alerta",
	mostrarHeader = true,
	posicionModal = "center",
	padding = "p-5",
	heighModal = "max-h-[90vh]",
	widthModal = "w-auto",
}) => {
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleKeyDown);
		}

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, onClose]);

	return (
		<div
			className={cn(
				"w-screen h-screen fixed top-0 left-0 p-5 flex justify-center items-center z-50 bg-black bg-opacity-50",
				posicionModal === "center" ? posicionModal : "items-start",
			)}
		>
			<div
				className={cn(
					"bg-white relative rounded-md shadow-sm overflow-y-auto border border-zinc-300",
					padding,
					heighModal,
					widthModal,
				)}
			>
				{mostrarHeader && (
					<div className="flex flex-row justify-between">
						<div className="flex justify-between items-center mb-2">
							<h3 className="max-md:mb-4 font-bold text-xl max-md:text-xl capitalize">
								{titulo}
							</h3>
						</div>

						<button
							type="button"
							className={cn(
								"size-8 border-none bg-none cursor-pointer transition ease-in-out duration-300 rounded-[5px]",
								hasCloseBtn ? "block" : "hidden",
							)}
							onClick={onClose}
						>
							<CircleX className="size-full text-red-600 hover:text-red-700" />
						</button>
					</div>
				)}

				{children}
			</div>
		</div>
	);
};

export default Modal;
