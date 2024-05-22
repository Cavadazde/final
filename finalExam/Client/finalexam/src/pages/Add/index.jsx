import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import {
  useDeleteProductMutation,
  useGetProductQuery,
  usePostProductMutation,
} from "../../services/productApi";
import { Table } from "antd";
import { useFormik } from "formik";
import addFormValidations from "../../validations";
import { Helmet } from "react-helmet";

const Add = () => {
  const [postProduct] = usePostProductMutation();
  const { data, refetch } = useGetProductQuery();
  const [deletedProduct] = useDeleteProductMutation();

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (element) => <img src={element} />,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "DiscountPercentage",
      dataIndex: "discountPercentage",
      key: "discountPercentage",
    },
    {
      title: "Delete",
      dataIndex: "delete",
      render: (data, product) => (
        <Button
          onClick={async () => {
            await deletedProduct(product._id);
            await refetch();
          }}
          variant="text"
        >
          Delete
        </Button>
      ),
    },
  ];
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      image: "",
      discountPercentage: "",
      isNewProduct: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      const response = await postProduct(values);
      console.log("response", response);
      await refetch();
    },
    validationSchema: addFormValidations,
  });

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Table
        dataSource={data?.data}
        columns={columns}
        style={{ paddingTop: "200px" }}
      />
      <form
        action=""
        onSubmit={formik.handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <TextField
          id="title"
          label="title"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title && (
          <span style={{ color: "red" }}>{formik.errors.title}</span>
        )}
        <TextField
          id="price"
          label="price"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price && (
          <span style={{ color: "red" }}>{formik.errors.price}</span>
        )}
        <TextField
          id="image"
          label="Image"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.image}
        />
        {formik.touched.image && formik.errors.image && (
          <span style={{ color: "red" }}>{formik.errors.image}</span>
        )}
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="isNewProduct"
          name="isNewProduct"
          onChange={formik.handleChange}
          value={formik.values.isNewProduct}
        />

        <TextField
          id="discountPercentage"
          label="discountPercentage"
          variant="outlined"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.discountPercentage}
        />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        {formik.touched.discountPercentage &&
          formik.errors.discountPercentage && (
            <span style={{ color: "red" }}>
              {formik.errors.discountPercentage}
            </span>
          )}

        <Button type="submit">Add</Button>
      </form>
    </div>
  );
};

export default Add;
