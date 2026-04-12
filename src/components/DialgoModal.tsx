import { type MouseEvent, useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.dialog`
  width: 400px;
  max-width: 90%;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  padding: 2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  &[open] {
    display: block;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: #1f2937;
  }

  p {
    color: #4b5563;
    margin-bottom: 1.5rem;
  }

  ::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;

  button {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:first-child {
      background-color: #dc2626;
      color: white;
      
      &:hover {
        background-color: #b91c1c;
      }
    }

    &:last-child {
      background-color: #f3f4f6;
      color: #1f2937;

      &:hover {
        background-color: #e5e7eb;
      }
    }
  }
`;

const isClickInsideRectangle = (e: MouseEvent, element: HTMLElement) => {
    const r = element.getBoundingClientRect();

    return (
        e.clientX > r.left &&
        e.clientX < r.right &&
        e.clientY > r.top &&
        e.clientY < r.bottom
    );
};

export { isClickInsideRectangle };

type Props = {
    title: string;
    isOpened: boolean;
    onProceed: () => void;
    onClose: () => void;
    children: React.ReactNode;
};

const DialogModal = ({
                         title,
                         isOpened,
                         onProceed,
                         onClose,
                         children,
                     }: Props) => {
    const ref = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (isOpened) {
            ref.current?.showModal();
            document.body.classList.add("modal-open"); // prevent bg scroll
        } else {
            ref.current?.close();
            document.body.classList.remove("modal-open");
        }
    }, [isOpened]);

    const proceedAndClose = () => {
        onProceed();
        onClose();
    };

    return (
        <Container
            ref={ref}
            onCancel={onClose}
            onClick={(e) =>
                ref.current && !isClickInsideRectangle(e, ref.current) && onClose()
            }
        >
            <h3>{title}</h3>

            {children}

            <Buttons>
                <button onClick={proceedAndClose}>Confirmar</button>
                <button onClick={onClose}>Cancelar</button>
            </Buttons>
        </Container>
    );
};

export default DialogModal;