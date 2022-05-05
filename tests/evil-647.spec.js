
  describe("some-evil-spec=647", () => {
    it("evil-block-647", () => {
      window.evil_647 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  