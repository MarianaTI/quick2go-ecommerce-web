import GetAllCategoryUseCase from "@/application/usecases/categoryUseCase/GetAllCategoryUseCase";
import Category from "@/domain/entities/category";
import CategoryRepo from "@/infrastructure/implementation/httpRequest/axios/CategoryRepo";
import DeleteCategoryUseCase from "@/application/usecases/categoryUseCase/DeleteCategoryUseCase";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  InputBase,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const GetAllCategory = () => {
  const [values, setValues] = useState<Category[]>([]);
  const [search, setSearch] = useState("");

  const categoryRepo = new CategoryRepo();
  const getAllCategory = new GetAllCategoryUseCase(categoryRepo);
  const deleteCategory = new DeleteCategoryUseCase(categoryRepo);

  useEffect(() => {
    const getAllCategoryMethod = async () => {
      try {
        const allCategory: Category[] = await getAllCategory.run();
        setValues(allCategory);
        console.log(allCategory);
      } catch (e) {
        console.error(e);
      }
    };
    getAllCategoryMethod();
  }, []);

  const deleteCategoryById = async (id: number = 0) => {
    try {
      const deletedCategory = await deleteCategory.run(id);
      setValues(values.filter((category) => category.id !== id));
      console.log(deletedCategory);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        style={{ color: "inherit" }}
        placeholder="Search"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton
        type="button"
        sx={{ p: "10px", color: "inherit" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: "1000px",
          maxWidth: "1248px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          marginBottom: 8,
          marginTop: 2,
        }}
      >
        <Table style={{ fontFamily: "Quicksand" }}>
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                style={{
                  backgroundColor: "#7E57C2",
                  color: "white",
                  fontFamily: "Quicksand",
                  fontSize: 16,
                }}
              >
                Código
              </TableCell>
              <TableCell
                align="center"
                style={{
                  backgroundColor: "#7E57C2",
                  color: "white",
                  fontFamily: "Quicksand",
                  fontSize: 16,
                }}
              >
                Nombre
              </TableCell>
              <TableCell
                align="center"
                style={{
                  backgroundColor: "#7E57C2",
                  color: "white",
                  fontFamily: "Quicksand",
                  fontSize: 16,
                }}
              >
                Descripción
              </TableCell>
              <TableCell
                align="center"
                style={{
                  backgroundColor: "#7E57C2",
                  color: "white",
                  fontFamily: "Quicksand",
                  fontSize: 16,
                }}
              >
                Estado
              </TableCell>
              <TableCell
                align="center"
                style={{
                  backgroundColor: "#7E57C2",
                  color: "white",
                  fontFamily: "Quicksand",
                  fontSize: 16,
                }}
              >
                Foto
              </TableCell>
              <TableCell
                align="center"
                style={{
                  backgroundColor: "#7E57C2",
                  color: "white",
                  fontFamily: "Quicksand",
                  fontSize: 16,
                }}
              >
                Control
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {values
              .filter((value) => {
                if (search === "") {
                  return value;
                } else if (
                  value.nombre?.toLowerCase().includes(search.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((values) => (
                <TableRow key={values.id}>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Quicksand", fontSize: 14 }}
                  >
                    # {values.id}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Quicksand", fontSize: 14 }}
                  >
                    {values.nombre}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Quicksand", fontSize: 14 }}
                  >
                    {values.descripcion}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Quicksand", fontSize: 14 }}
                  >
                    {values.estado}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Quicksand", fontSize: 14 }}
                  >
                    <img src={values.foto} width={50} height={50} />
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => deleteCategoryById(values.id)}
                      style={{
                        backgroundColor: "#6750A4",
                        color: "white",
                        fontFamily: "Quicksand",
                        fontSize: 14,
                      }}
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default GetAllCategory;
