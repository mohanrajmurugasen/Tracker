import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import Comments from "../index";

const dummyData = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  },
];

jest.mock("axios");

describe("Comments", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Get Calls", async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: dummyData });

    render(<Comments />);

    const comments = await waitFor(() => screen.getAllByTestId("comment"));

    expect(comments).toHaveLength(2);
  });
});
