
  describe("some-evil-spec=943", () => {
    it("evil-block-943", () => {
      window.evil_943 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  