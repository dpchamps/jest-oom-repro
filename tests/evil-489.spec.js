
  describe("some-evil-spec=489", () => {
    it("evil-block-489", () => {
      window.evil_489 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  