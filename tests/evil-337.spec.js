
  describe("some-evil-spec=337", () => {
    it("evil-block-337", () => {
      window.evil_337 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  