
  describe("some-evil-spec=206", () => {
    it("evil-block-206", () => {
      window.evil_206 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  