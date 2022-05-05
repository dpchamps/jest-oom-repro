
  describe("some-evil-spec=849", () => {
    it("evil-block-849", () => {
      window.evil_849 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  