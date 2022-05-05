
  describe("some-evil-spec=259", () => {
    it("evil-block-259", () => {
      window.evil_259 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  