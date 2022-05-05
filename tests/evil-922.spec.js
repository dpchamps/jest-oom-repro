
  describe("some-evil-spec=922", () => {
    it("evil-block-922", () => {
      window.evil_922 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  