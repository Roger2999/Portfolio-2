import { SimpleButton } from "../SimpleButton/SimpleButton";

interface ModalProps {
  id: string;
  modalTitle?: string;
  description?: string[] | string;
  buttonProps: React.ComponentPropsWithRef<"button">;
}
export const Modal = ({
  id,
  modalTitle,
  description,
  buttonProps,
}: ModalProps) => {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {modalTitle === "React" && <button {...buttonProps} />}

      {/*Se le da el id a dialog para tener referencia al presionar el boton que va a llamarlo a traves de ese id*/}
      <dialog id={id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{modalTitle}</h3>
          <p className="py-4">
            {Array.isArray(description)
              ? description.map((item) => (
                  <SimpleButton className="btn btn-dash" key={item}>
                    {item}
                  </SimpleButton>
                ))
              : description}
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
