
  describe("some-evil-spec=951", () => {
    it("evil-block-951", () => {
      window.evil_951 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  