
  describe("some-evil-spec=383", () => {
    it("evil-block-383", () => {
      window.evil_383 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  