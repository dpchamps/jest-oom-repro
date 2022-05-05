
  describe("some-evil-spec=223", () => {
    it("evil-block-223", () => {
      window.evil_223 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  