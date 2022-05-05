
  describe("some-evil-spec=43", () => {
    it("evil-block-43", () => {
      window.evil_43 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  