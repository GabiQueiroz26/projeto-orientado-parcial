import { useContext } from "react";
import { ButtonContainer, FormContainer } from "./Styles";
import { ToastContainer } from "react-toastify";
import { FormContext } from "../../contexts/FormContext";

import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { InputField } from "../../components/Form/Form";

import "react-toastify/dist/ReactToastify.min.css";

const CadastroProduto = () => {
  const { produtoData, handleChange, handleSubmit, handleCancel } =
    useContext(FormContext);

  return (
    <Card title={"Cadastro de Produto"} icon={"bi bi-box-seam"}>
      <ToastContainer />
      <FormContainer>
        <InputField
          label={"Nome"}
          name={"nome"}
          value={produtoData.nome}
          onChange={(e) => handleChange(e, "produto")}
        />
        <InputField
          label={"Marca"}
          name={"marca"}
          value={produtoData.marca}
          onChange={(e) => handleChange(e, "produto")}
        />
        <InputField
          label="Categoria"
          name={"categoria"}
          value={produtoData.categoria}
          onChange={(e) => handleChange(e, "produto")}
        />
        <InputField
          label="Fornecedor"
          name={"fornecedor"}
          value={produtoData.fornecedor}
          onChange={(e) => handleChange(e, "produto")}
        />
        <InputField
          label={"Foto"}
          type={"file"}
          name={"picture"}
          value={produtoData.picture}
          onChange={(e) => handleChange(e, "produto")}
        />
      </FormContainer>
      <ButtonContainer>
        <Button label={"Adicionar"} onClick={handleSubmit} />
        <Button label={"Cancelar"} onClick={handleCancel} />
      </ButtonContainer>
    </Card>
  );
};

export default CadastroProduto;
