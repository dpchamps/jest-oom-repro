
  describe("some-evil-spec=101", () => {
    it("evil-block-101", () => {
      window.evil_101 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  