
  describe("some-evil-spec=322", () => {
    it("evil-block-322", () => {
      window.evil_322 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  