
  describe("some-evil-spec=770", () => {
    it("evil-block-770", () => {
      window.evil_770 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  