
  describe("some-evil-spec=175", () => {
    it("evil-block-175", () => {
      window.evil_175 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  