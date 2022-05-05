
  describe("some-evil-spec=118", () => {
    it("evil-block-118", () => {
      window.evil_118 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  