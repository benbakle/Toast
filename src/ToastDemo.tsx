import { useToast } from './ToastContextProvider';

export function ToastDemo() {
  const { toast, toastMessage, toastSuccess, toastWarning } = useToast();

  const onToastClick = () => {
    const uniqueId = Date.now().toString();
    const text = `Toast :: Something else is doing it! Message ${uniqueId}`;
    toast({ text, timeout: 5000 });
  };

  const onWarningClick = () => {
    const uniqueId = Date.now().toString();
    const text = `Warning :: You may not have done it! Message ${uniqueId}`;
    toastWarning(text, 10000);
  };

  const onSuccessClick = () => {
    const uniqueId = Date.now().toString();
    const text = `Success :: You did it! Message ${uniqueId}`;
    toastSuccess(text, 15000);
  };

  const onToastNoTimeoutClick = () => {
    const text = "Ok... I'll just uh... hang out.";
    toastMessage(text);
  };

  const onBigToast = () => {
    const text =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!';
    toast({ text, timeout: 15000, type: 'message' });
  };

  return (
    <div className={`toast-demo`}>
      <button {...{ onClick: onSuccessClick }}>success</button>
      <button {...{ onClick: onWarningClick }}>warning</button>
      <button {...{ onClick: onToastClick }}>toast</button>
      <button {...{ onClick: onBigToast }}>big ol' toast</button>
      <button {...{ onClick: onToastNoTimeoutClick }}>toast (no timeout)</button>
    </div>
  );
}
