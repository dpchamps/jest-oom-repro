
  describe("some-evil-spec=984", () => {
    it("evil-block-984", () => {
      window.evil_984 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  