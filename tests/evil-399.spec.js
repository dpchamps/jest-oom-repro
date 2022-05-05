
  describe("some-evil-spec=399", () => {
    it("evil-block-399", () => {
      window.evil_399 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  