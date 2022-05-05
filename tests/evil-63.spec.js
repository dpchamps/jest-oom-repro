
  describe("some-evil-spec=63", () => {
    it("evil-block-63", () => {
      window.evil_63 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  