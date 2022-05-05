
  describe("some-evil-spec=273", () => {
    it("evil-block-273", () => {
      window.evil_273 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  