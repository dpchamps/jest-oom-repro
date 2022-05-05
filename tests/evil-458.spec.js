
  describe("some-evil-spec=458", () => {
    it("evil-block-458", () => {
      window.evil_458 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  