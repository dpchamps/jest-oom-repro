
  describe("some-evil-spec=331", () => {
    it("evil-block-331", () => {
      window.evil_331 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  