
  describe("some-evil-spec=964", () => {
    it("evil-block-964", () => {
      window.evil_964 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  